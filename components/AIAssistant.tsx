import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles, AlertCircle } from 'lucide-react';
import { SKILLS } from '../constants';
import { useLang } from '../i18n';

interface Message {
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [apiKeyError, setApiKeyError] = useState(false);

  const { t, lang, profile, experiences, educations, portfolio, certifications } = useLang();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    t('assistantSug1'),
    t('assistantSug2'),
    t('assistantSug3'),
    t('assistantSug4'),
  ];

  // Load API Key + initial greeting
  useEffect(() => {
    const savedKey = (localStorage.getItem('user_gemini_api_key') || '').trim();

    if (savedKey) {
      setApiKey(savedKey);
    }

    setMessages([
      {
        sender: 'bot',
        text: t('assistantGreeting'),
        timestamp: new Date()
      }
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSaveCustomKey = (key: string) => {
    const trimmedKey = key.trim();
    if (trimmedKey) {
      localStorage.setItem('user_gemini_api_key', trimmedKey);
      setApiKey(trimmedKey);
      setShowKeyInput(false);
      setApiKeyError(false);

      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: t('assistantKeySaved'),
          timestamp: new Date()
        }
      ]);
    }
  };

  const handleClearKey = () => {
    localStorage.removeItem('user_gemini_api_key');
    setApiKey('');
    setShowKeyInput(true);
    setMessages(prev => [
      ...prev,
      {
        sender: 'bot',
        text: t('assistantKeyRemoved'),
        timestamp: new Date()
      }
    ]);
  };

  const buildSystemInstruction = () => {
    const experiencesStr = experiences.map(e => `- ${e.role} en ${e.company} (${e.period}): ${e.description}`).join('\n');
    const educationsStr = educations.map(e => `- ${e.degree} en ${e.institution} (${e.period}): ${e.description || ''}`).join('\n');
    const skillsStr = SKILLS.map(s => `- ${s.name} (${s.category})`).join('\n');
    const portfolioStr = portfolio.map(p => `- ${p.title}: ${p.description} (Link: ${p.link || 'N/A'}, Tags: ${p.tags.join(', ')})`).join('\n');
    const certsStr = certifications.map(c => `- ${c.title} de ${c.issuer}`).join('\n');

    if (lang === 'en') {
      return `You are the interactive virtual assistant for Engineer Emmanuel Rojas (Adalberto Emmanuel Rojas). Your goal is to answer questions from recruiters, students, and colleagues about his professional career, based strictly on his resume.

Here is Emmanuel's information:
Name: ${profile.name}
Title: ${profile.title}
About: ${profile.about}

Work experience:
${experiencesStr}

Education:
${educationsStr}

Technical Skills:
${skillsStr}

Projects / Web Portfolio:
${portfolioStr}

Certifications:
${certsStr}

Instructions for answering:
1. Be professional, helpful, concise, and friendly. Always respond in English.
2. Base your answers only on the information provided. If asked something not in the resume, politely respond that you do not have that information and that they can contact Emmanuel directly using the contact links in the footer.
3. Do not invent experience, degrees, projects, or technologies that are not explicit.
4. Keep answers short (at most 2 or 3 short paragraphs) so they fit well in the chat.
5. Suggest ways to contact him, always providing the direct links if asked how to reach him (email: mamueljr@gmail.com, WhatsApp: +52 614 254 1066, or LinkedIn: https://www.linkedin.com/in/adalberto-emmanuel-rojas/).`;
    }

    return `Eres el asistente virtual interactivo del Ingeniero Emmanuel Rojas (Adalberto Emmanuel Rojas). Tu objetivo es responder preguntas de reclutadores, alumnos y colegas sobre su trayectoria profesional basándote estrictamente en su currículum.

Aquí está la información de Emmanuel:
Nombre: ${profile.name}
Título: ${profile.title}
Acerca de: ${profile.about}

Experiencia laboral:
${experiencesStr}

Formación Académica:
${educationsStr}

Habilidades Técnicas:
${skillsStr}

Proyectos / Portafolio Web:
${portfolioStr}

Certificaciones:
${certsStr}

Instrucciones para responder:
1. Sé profesional, servicial, conciso y amigable. Responde siempre en español.
2. Basate únicamente en la información proporcionada. Si te preguntan algo que no está en el CV, responde amablemente que no tienes esa información y que pueden contactar a Emmanuel directamente usando los enlaces de contacto en el pie de página.
3. No inventes experiencia, títulos, proyectos ni tecnologías que no estén explícitas.
4. Mantén las respuestas cortas (máximo 2 o 3 párrafos cortos) para que quepan bien en el chat.
5. Sugiere formas de contactarlo proporcionando siempre los enlaces directos si te preguntan cómo hablar con él (correo: mamueljr@gmail.com, WhatsApp: +52 614 254 1066, o LinkedIn: https://www.linkedin.com/in/adalberto-emmanuel-rojas/).`;
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      sender: 'user',
      text: text,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const systemInstruction = buildSystemInstruction();
      let response: Response;

      if (apiKey) {
        // Si el usuario proporcionó su propia API Key, llamamos directamente a Gemini
        response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              contents: [
                {
                  parts: [{ text: text }]
                }
              ],
              systemInstruction: {
                parts: [{ text: systemInstruction }]
              },
              generationConfig: {
                temperature: 0.3,
                maxOutputTokens: 1000,
                thinkingConfig: {
                  thinkingBudget: 0
                }
              }
            })
          }
        );
      } else {
        // En local busca /api/chat, en producción de GitHub Pages apunta a tu servidor backend en Vercel
        const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        const backendUrl = isLocal
          ? '/api/chat'
          : 'https://resume-ten-red-17.vercel.app/api/chat';

        response = await fetch(backendUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text,
            systemInstruction
          })
        });
      }

      if (!response.ok) {
        throw new Error('API Request Failed');
      }

      const data = await response.json();
      const botText = data.candidates?.[0]?.content?.parts?.[0]?.text || t('assistantFallback');

      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: botText,
          timestamp: new Date()
        }
      ]);
    } catch (error) {
      console.error(error);
      setApiKeyError(true);
      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: t('assistantError'),
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="w-[350px] sm:w-[400px] h-[550px] bg-primary/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/40 flex flex-col overflow-hidden mb-4 mr-0 md:mr-2"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary to-secondary border-b border-white/10 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent relative">
                  <Bot size={22} />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-primary"></span>
                </div>
                <div>
                  <h3 className="font-bold text-sm flex items-center gap-1.5">
                    {t('assistantTitle')}
                    <Sparkles size={14} className="text-accent-soft fill-accent-soft" />
                  </h3>
                  <p className="text-[11px] text-gray-400 font-light">{t('assistantOnline')}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 text-sm text-slate-100">

              {/* API Key settings panel */}
              {(showKeyInput || apiKeyError) && (
                <div className="p-3 bg-secondary/80 rounded-xl border border-white/10 mb-2">
                  <div className="flex items-start gap-2.5 mb-2">
                    <AlertCircle size={18} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-white">{t('assistantKeyTitle')}</p>
                      <p className="text-[11px] text-gray-400 mt-1 leading-normal">
                        {t('assistantKeyDesc')}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <input
                      type="password"
                      placeholder="AIzaSy..."
                      defaultValue={apiKey}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSaveCustomKey((e.target as HTMLInputElement).value);
                      }}
                      id="gemini-key-input"
                      className="flex-1 px-3 py-1.5 bg-primary border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-accent"
                    />
                    <button
                      onClick={() => {
                        const input = document.getElementById('gemini-key-input') as HTMLInputElement;
                        handleSaveCustomKey(input.value);
                      }}
                      className="px-3 py-1.5 bg-accent hover:bg-blue-600 text-white text-xs font-medium rounded-lg transition-colors"
                    >
                      {t('assistantSave')}
                    </button>
                  </div>
                  {apiKey && (
                    <button
                      onClick={handleClearKey}
                      className="text-[10px] text-red-400 hover:text-red-300 mt-2 block hover:underline"
                    >
                      {t('assistantRemoveKey')}
                    </button>
                  )}
                  <a
                    href="https://aistudio.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-accent hover:underline mt-1.5 block"
                  >
                    {t('assistantGetKey')}
                  </a>
                </div>
              )}

              {/* Messages list */}
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-2.5 max-w-[85%] ${msg.sender === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${
                    msg.sender === 'user'
                      ? 'bg-secondary border-white/10 text-gray-300'
                      : 'bg-accent/15 border-accent/30 text-accent'
                  }`}>
                    {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={`p-3 rounded-2xl whitespace-pre-wrap leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-accent text-white rounded-tr-none shadow-md shadow-accent/10'
                      : 'bg-secondary/60 border border-white/10 rounded-tl-none text-slate-100'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* AI Loading indicator */}
              {isLoading && (
                <div className="flex gap-2.5 max-w-[85%] self-start">
                  <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/30 text-accent flex items-center justify-center shrink-0">
                    <Bot size={14} />
                  </div>
                  <div className="p-3 bg-secondary/60 border border-white/10 rounded-2xl rounded-tl-none flex items-center gap-1">
                    <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions Chips */}
            {messages.length === 1 && !isLoading && (
              <div className="px-4 pb-2 pt-1 flex flex-col gap-1.5 border-t border-white/10 bg-primary/40">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">{t('assistantSuggested')}</p>
                <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pb-1">
                  {suggestions.map((sug, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(sug)}
                      className="px-2.5 py-1 bg-secondary hover:bg-white/10 border border-white/10 text-[11px] text-gray-300 rounded-full transition-colors text-left"
                    >
                      {sug}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Footer */}
            <div className="p-3 bg-primary border-t border-white/10 flex gap-2">
              <input
                type="text"
                placeholder={t('assistantPlaceholder')}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendMessage(inputValue);
                }}
                disabled={isLoading}
                className="flex-1 px-4 py-2 bg-secondary/80 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-accent disabled:opacity-50 text-sm"
              />
              <motion.button
                whileTap={{ scale: 0.94 }}
                onClick={() => handleSendMessage(inputValue)}
                disabled={isLoading || !inputValue.trim()}
                className="p-2.5 bg-accent hover:bg-teal-600 disabled:bg-secondary disabled:text-slate-600 text-white rounded-xl transition-all shadow-lg hover:shadow-accent/20 flex items-center justify-center"
              >
                <Send size={16} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-accent hover:bg-teal-600 text-white rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center gap-2 group relative z-50 hover:shadow-accent/30"
        aria-label={t('assistantToggleAria')}
      >
        <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all group-hover:max-w-xs group-hover:ml-1 hidden sm:inline-block">
          {t('assistantToggle')}
        </span>

        {/* Glow pulsing ring around the button to make it look premium */}
        <span className="absolute inset-0 rounded-full border border-accent animate-ping opacity-75"></span>
      </motion.button>
    </div>
  );
};

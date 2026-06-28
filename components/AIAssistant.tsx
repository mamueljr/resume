import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles, Key, AlertCircle, RefreshCw } from 'lucide-react';
import { PROFILE, EXPERIENCES, SKILLS, WEB_PORTFOLIO, EDUCATIONS, CERTIFICATIONS } from '../constants';

const MotionDiv = motion.div as any;

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

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Suggested questions
  const suggestions = [
    "¿Cuál es su experiencia en Inteligencia Artificial?",
    "¿Qué materias imparte como profesor?",
    "¿En qué proyectos ha trabajado?",
    "¿Cuáles son sus datos de contacto?"
  ];

  // Load API Key
  useEffect(() => {
    // 1. Try env variable
    const envKey = (process.env.GEMINI_API_KEY || process.env.API_KEY || '').trim();
    
    // 2. Try localStorage
    const savedKey = (localStorage.getItem('user_gemini_api_key') || '').trim();

    if (envKey) {
      setApiKey(envKey);
    } else if (savedKey) {
      setApiKey(savedKey);
    } else {
      setShowKeyInput(true);
    }

    // Add initial bot greeting
    setMessages([
      {
        sender: 'bot',
        text: `¡Hola! Soy el asistente virtual del Ing. Adalberto Rojas. ✨\n\nPuedes preguntarme sobre su experiencia laboral, proyectos, habilidades técnicas o formación académica. ¿En qué te puedo ayudar hoy?`,
        timestamp: new Date()
      }
    ]);
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
          text: '✓ Llave de API configurada correctamente en tu navegador. ¡Ahora puedes chatear conmigo!',
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
        text: 'La llave de API local ha sido eliminada.',
        timestamp: new Date()
      }
    ]);
  };

  const getSystemInstruction = () => {
    const experiencesStr = EXPERIENCES.map(e => `- ${e.role} en ${e.company} (${e.period}): ${e.description}`).join('\n');
    const educationsStr = EDUCATIONS.map(e => `- ${e.degree} en ${e.institution} (${e.period}): ${e.description || ''}`).join('\n');
    const skillsStr = SKILLS.map(s => `- ${s.name} (${s.category})`).join('\n');
    const portfolioStr = WEB_PORTFOLIO.map(p => `- ${p.title}: ${p.description} (Link: ${p.link || 'N/A'}, Tags: ${p.tags.join(', ')})`).join('\n');
    const certsStr = CERTIFICATIONS.map(c => `- ${c.title} de ${c.issuer}`).join('\n');

    return `Eres el asistente virtual interactivo del Ingeniero Adalberto Emmanuel Rojas. Tu objetivo es responder preguntas de reclutadores, alumnos y colegas sobre su trayectoria profesional basándote estrictamente en su currículum.

Aquí está la información de Adalberto:
Nombre: ${PROFILE.name}
Título: ${PROFILE.title}
Acerca de: ${PROFILE.about}

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
2. Basate únicamente en la información proporcionada. Si te preguntan algo que no está en el CV, responde amablemente que no tienes esa información y que pueden contactar a Adalberto directamente usando los enlaces de contacto en el pie de página.
3. No inventes experiencia, títulos, proyectos ni tecnologías que no estén explícitas.
4. Mantén las respuestas cortas (máximo 2 o 3 párrafos cortos) para que quepan bien en el chat.
5. Puedes sugerir formas de contactarlo si te preguntan cómo hablar con él (correo: mamueljr@gmail.com, WhatsApp: +52 614 254 1066, o LinkedIn).`;
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

    if (!apiKey) {
      setIsLoading(false);
      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: '⚠️ Por favor, introduce una API Key de Gemini válida en la configuración para poder responderte.',
          timestamp: new Date()
        }
      ]);
      setShowKeyInput(true);
      return;
    }

    try {
      const systemInstruction = getSystemInstruction();
      
      // Build conversation history format for Gemini API
      // Since this is gemini-2.5-flash / gemini-1.5-flash, the contents contain the user message.
      const response = await fetch(
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
              maxOutputTokens: 500,
            }
          })
        }
      );

      if (!response.ok) {
        throw new Error('API Request Failed');
      }

      const data = await response.json();
      const botText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No pude procesar la respuesta. Inténtalo de nuevo.';

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
          text: '❌ Hubo un error al conectar con Gemini. Por favor verifica que tu API Key sea correcta o que tengas conexión a internet.',
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
          <MotionDiv
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="w-[350px] sm:w-[400px] h-[550px] bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 mr-0 md:mr-2"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700/50 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent relative">
                  <Bot size={22} />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-950"></span>
                </div>
                <div>
                  <h3 className="font-bold text-sm flex items-center gap-1.5">
                    Asistente de Adalberto
                    <Sparkles size={14} className="text-yellow-400 fill-yellow-400" />
                  </h3>
                  <p className="text-[11px] text-gray-400 font-light">En línea | Gemini 2.5 Flash</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setShowKeyInput(!showKeyInput)}
                  className={`p-2 rounded-lg hover:bg-slate-800 transition-colors ${apiKey && !showKeyInput ? 'text-gray-400' : 'text-accent bg-accent/10'}`}
                  title="Configurar API Key"
                >
                  <Key size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 text-sm text-slate-100">
              
              {/* API Key settings panel */}
              {showKeyInput && (
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 mb-2">
                  <div className="flex items-start gap-2.5 mb-2">
                    <AlertCircle size={18} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-white">Configuración de API Key</p>
                      <p className="text-[11px] text-gray-400 mt-1 leading-normal">
                        Para habilitar las respuestas en tiempo real, ingresa una llave de Gemini. Es 100% gratuita y se almacena únicamente en tu navegador.
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
                      className="flex-1 px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-accent"
                    />
                    <button
                      onClick={() => {
                        const input = document.getElementById('gemini-key-input') as HTMLInputElement;
                        handleSaveCustomKey(input.value);
                      }}
                      className="px-3 py-1.5 bg-accent hover:bg-blue-600 text-white text-xs font-medium rounded-lg transition-colors"
                    >
                      Guardar
                    </button>
                  </div>
                  {apiKey && (
                    <button 
                      onClick={handleClearKey}
                      className="text-[10px] text-red-400 hover:text-red-300 mt-2 block hover:underline"
                    >
                      Eliminar llave guardada
                    </button>
                  )}
                  <a 
                    href="https://aistudio.google.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] text-accent hover:underline mt-1.5 block"
                  >
                    Obtener API Key gratis en Google AI Studio &rarr;
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
                      ? 'bg-slate-800 border-slate-700 text-gray-300' 
                      : 'bg-accent/15 border-accent/30 text-accent'
                  }`}>
                    {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={`p-3 rounded-2xl whitespace-pre-wrap leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-accent text-white rounded-tr-none shadow-md shadow-accent/10'
                      : 'bg-slate-800/60 border border-slate-800 rounded-tl-none text-slate-100'
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
                  <div className="p-3 bg-slate-800/60 border border-slate-800 rounded-2xl rounded-tl-none flex items-center gap-1">
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
              <div className="px-4 pb-2 pt-1 flex flex-col gap-1.5 border-t border-slate-800/50 bg-slate-900/40">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Preguntas sugeridas:</p>
                <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pb-1">
                  {suggestions.map((sug, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(sug)}
                      className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 border border-slate-700/50 text-[11px] text-gray-300 rounded-full transition-colors text-left"
                    >
                      {sug}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Footer */}
            <div className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
              <input
                type="text"
                placeholder="Escribe una pregunta..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendMessage(inputValue);
                }}
                disabled={isLoading}
                className="flex-1 px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-accent disabled:opacity-50 text-sm"
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                disabled={isLoading || !inputValue.trim()}
                className="p-2.5 bg-accent hover:bg-blue-600 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-xl transition-all shadow-lg hover:shadow-accent/20 flex items-center justify-center"
              >
                <Send size={16} />
              </button>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-accent hover:bg-blue-600 text-white rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center gap-2 group relative z-50 hover:shadow-accent/30"
        aria-label="Abrir asistente de IA"
      >
        <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all group-hover:max-w-xs group-hover:ml-1 hidden sm:inline-block">
          Asistente IA
        </span>
        
        {/* Glow pulsing ring around the button to make it look premium */}
        <span className="absolute inset-0 rounded-full border border-accent animate-ping opacity-75"></span>
      </button>
    </div>
  );
};

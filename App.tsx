import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-100 font-sans">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-6xl sm:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-fade-in">
              Welcome to jray.me
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              Your personal web space
            </p>
          </div>

          {/* Main Content Area */}
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 sm:p-12 mb-8">
            <div className="space-y-6">
              <div className="text-center">
                <svg 
                  className="w-24 h-24 mx-auto mb-6 text-cyan-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
                  />
                </svg>
                <h2 className="text-3xl font-semibold mb-4 text-white">
                  Ready to Build
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  This is your blank canvas. Add your own content, components, and pages here.
                  <br />
                  Start by editing <code className="bg-gray-700 px-2 py-1 rounded text-cyan-300">App.tsx</code>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-700 bg-opacity-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">📁 Add Files</h3>
                  <p className="text-gray-300 text-sm">
                    Add your own HTML, CSS, and JavaScript files to this project
                  </p>
                </div>
                <div className="bg-gray-700 bg-opacity-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">⚡ Built with Vite</h3>
                  <p className="text-gray-300 text-sm">
                    Fast development server with hot module replacement
                  </p>
                </div>
                <div className="bg-gray-700 bg-opacity-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2 text-pink-400">🎨 Styled with Tailwind</h3>
                  <p className="text-gray-300 text-sm">
                    Utility-first CSS framework for rapid UI development
                  </p>
                </div>
                <div className="bg-gray-700 bg-opacity-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2 text-green-400">🚀 Ready to Deploy</h3>
                  <p className="text-gray-300 text-sm">
                    Build with <code className="bg-gray-600 px-1 rounded">npm run build</code>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="text-gray-400 text-sm">
            <p>
              Made with ❤️ by{' '}
              <a 
                href="https://jray.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
              >
                jray.me
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;

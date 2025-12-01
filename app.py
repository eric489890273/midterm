from flask import Flask, send_from_directory
import os

app = Flask(__name__,
            static_folder='.',
            template_folder='.')

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory('.', filename)

# Vercel 需要這個變數
application = app

if __name__ == '__main__':
    print("=" * 50)
    print("🎮 背包亂鬥 Backpack Battles")
    print("=" * 50)
    print("遊戲網址: http://127.0.0.1:5000")
    print("按 Ctrl+C 停止伺服器")
    print("=" * 50)
    app.run(debug=True, port=5000)

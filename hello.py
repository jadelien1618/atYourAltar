from flask import Flask
from flask import redirect

counter = [0, 0, 0]

app = Flask(__name__, static_folder="./static")

@app.route("/")
def hello():
    return {
        'counter': counter
    }

@app.route("/goto/<path:url>", methods=['GET'])
def _goto(url):
    return redirect(url)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)

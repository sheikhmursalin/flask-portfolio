from flask import Flask, render_template, request, jsonify
# from flask_mail import Mail, Message  # optional if you want email

app = Flask(__name__)

# routes
@app.route("/")
def home():
    return render_template("index.html")

# Handle enquiry POST
@app.route("/enquiry", methods=["POST"])
def enquiry():
    data = request.get_json()
    # TODO: store in DB, send email, etc.
    print("Enquiry received:", data)
    return jsonify({"status": "ok"}), 200

if __name__ == "__main__":
    app.run(debug=True)

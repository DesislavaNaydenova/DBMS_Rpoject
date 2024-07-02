import os
from taskmanager import app, db


with app.app_context():
    db.create_all()
    # You can also add any other initialization code here


if __name__ == "__main__":
    app.run(
        host=os.environ.get("IP"),
        port=int(os.environ.get("PORT")),
        debug=os.environ.get("DEBUG")
    )

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import Response

app = FastAPI(title="Heroes")
app.mount("/static", StaticFiles(directory="../static"), name="static")


@app.get("/")
def index():
    with open("../templates/index.html", "r") as f:
        return Response(f.read(), media_type="text/html")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="localhost", port=8000, reload=True)
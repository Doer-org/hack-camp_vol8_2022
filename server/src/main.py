def main():
    from presentation.router.router import app

    app.run(host="0.0.0.0", port=8000, debug=True)


if __name__ == "__main__":
    main()

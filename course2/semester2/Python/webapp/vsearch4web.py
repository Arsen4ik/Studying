from flask import Flask, render_template, request, escape
from vsearch import search4letters

app = Flask(__name__)

# @app.route('/')
# def hello() -> '302':
#     return redirect('/entry')

def log_request(req: 'flask_request', res: str) -> None:
    with open('vsearch.log', 'a') as log:
        print(req.form, req.remote_addr, req.user_agent, res, file=log, sep='|')
        # print(str(dir(req)), res, file=log)


@app.route('/search4', methods=['POST'])
def do_search() -> 'html':
    phrase = request.form['phrase']
    letters = request.form['letters']
    title = 'here are your results:'
    results = str(search4letters(phrase, letters))
    log_request(request, results)
    return render_template('results.html', the_letters=letters, the_title=title, the_results=results)
    # return str(search4letters(phrase, letters))

@app.route('/')
@app.route('/entry')
def entry_page() -> 'html':
    return render_template('entry.html', the_title='Welcome to search4letters on the web!')

@app.route('/viewlog')
def view_the_log() -> 'str':
    with open('vsearch.log') as log:
        contents = log.read()
    return escape(''.join(contents))

if __name__ == '__main__':
    app.run(debug=True)
import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    covers = getCovers()
    covers = covers[:3]
    return render_template('index.html', covers=covers)

@app.route('/project/<project_name>')
def project_detail(project_name):
    # Chemin vers le répertoire du projet
    project_dir = os.path.join('static/', 'project', project_name)    
    # Liste des images dans le répertoire du projet
    project_images = os.listdir(project_dir)    
    return render_template('project_detail.html', project_name=project_name, projectImages=project_images)

@app.route('/')
def gallery():
    covers = getCovers()
    return render_template('gallery.html', covers=covers)

@app.route('/templates')
def contact():
    # Récupérer les images svg pour les logos 
    path = os.path.join('static/logos')
    logos = os.listdir(path)
    return render_template('contact.html', logos=logos)

if __name__ == '__main__':
    app.run(debug=True)


@app.route('/')
def getCovers():
    return os.listdir(os.path.join(app.static_folder, 'covers'))
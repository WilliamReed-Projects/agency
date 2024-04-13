#! /usr/bin/env python3.6

"""
server.py
Stripe Sample.
Python 3.6 or newer required.
"""
import os
from flask import Flask, redirect, request, session, jsonify, render_template

app = Flask(__name__,
            static_url_path='',
            static_folder='static',
            template_folder='templates')
app.secret_key = 'your_secret_key'  # Change this to a secure key for security

YOUR_DOMAIN = 'http://localhost:4242'

# Sample product catalog with price_ids


@app.route('/')
def HOME():
    return render_template('index.html')

@app.route('/creation-site-web')
def web():
    return render_template('site-web.html')

@app.route('/prestations-web')
def prestation1():
    return render_template('prestations-web.html')

@app.route('/prestations-graphiques')
def prestation2():
    return render_template('prestations-graphiques.html')

@app.route('/projets')
def projets():
    return render_template('projets.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(port=4242)


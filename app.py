#! /usr/bin/env python3.6

"""
server.py
Stripe Sample.
Python 3.6 or newer required.
"""
import os
from flask import Flask, redirect, request, session, jsonify, render_template

import stripe
# This is your test secret API key.
stripe.api_key = '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'

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

if __name__ == '__main__':
    app.run(port=4242)


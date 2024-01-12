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
product_catalog = {
    'product1': {'name': 'Stone Island XS', 'price_id': 'price_1OC4cQJWhZicvshqkjTpnA9S'},
    'product2': {'name': 'Stone Island S', 'price_id': 'price_1OC68XJWhZicvshqiKCXoByD'},
    'product3': {'name': 'Stone Island M', 'price_id': 'price_1OC6BfJWhZicvshqZe1hSlPF'},
    'product4': {'name': 'Stone Island L', 'price_id': 'price_1OUXmRJWhZicvshqn9hxhc7H'},
    'product5': {'name': 'Stone Island XL', 'price_id': 'price_1OC6CiJWhZicvshqE4UCEpsr'},
    'product6': {'name': 'Stone Island S', 'price_id': 'price_1OC68XJWhZicvshqiKCXoByD'},

    # Add more products as needed
}

@app.route('/get-product-names', methods=['GET'])
def get_product_names():
    product_names = {
        'product1': 'Stone Island',  # Replace with actual product names
        'product2': 'Another Product',  # Replace with actual product names
        # Add more product names as needed
    }
    print("Product Names:", product_names)
    return jsonify(product_names)
 
@app.route('/product/<product_id>')
def product(product_id):
    if product_id in product_catalog:
        return render_template(f'{product_id}.html')  # Render template based on product_id
    else:
        return 'Product not found', 404
@app.route('/shop')
def shop():
    return render_template('shop.html')
@app.route('/')
def home():
    return render_template('home.html')
@app.route('/sucess-payment')
def sucess():
    return render_template('sucess-payment.html')
@app.route('/terms-and-conditions')
def terms():
    return render_template('terms-condition.html')
@app.route('/privacy-policy')
def privacy():
    return render_template('privacy-policy.html')
@app.route('/shipping-and-returns')
def refun():
    return render_template('refund-shipping.html')
# Route to handle adding items to the cart
@app.route('/add-to-cart', methods=['POST'])
def add_to_cart():
    try:
        # Get product information from the request
        product_id = request.json['product_id']
        quantity = request.json.get('quantity', 1)

        # Check if the product exists in the catalog
        if product_id not in product_catalog:
            return 'Product not found', 400

        product_info = product_catalog[product_id]
        price_id = product_info['price_id']

        # Retrieve the current cart from the session or create an empty cart
        cart = session.get('cart', [])

        # Check if the product is already in the cart and update the quantity
        for item in cart:
            if item['product_id'] == product_id:
                item['quantity'] += quantity
                break
        else:
            # If the product is not in the cart, add it
            cart.append({
                'product_id': product_id,
                'price_id': price_id,
                'quantity': quantity,
            })

        # Update the cart in the session
        session['cart'] = cart

        return 'Item added to cart successfully'

    except Exception as e:
        return str(e)

# Route to get the current cart items
@app.route('/get-cart', methods=['GET'])
def get_cart():
    return jsonify(session.get('cart', []))

# Route to update the cart items
@app.route('/update-cart', methods=['POST'])
def update_cart():
    try:
        # Get updated cart information from the request
        updated_cart = request.json.get('cart', [])

        # Validate and update the cart
        for item in updated_cart:
            product_id = item['product_id']
            quantity = item['quantity']

            if product_id not in product_catalog:
                return f'Product {product_id} not found', 400

            product_info = product_catalog[product_id]
            price_id = product_info['price_id']

            # Update quantity in the cart
            for cart_item in session['cart']:
                if cart_item['product_id'] == product_id:
                    cart_item['quantity'] = quantity

        return 'Cart updated successfully'

    except Exception as e:
        return str(e)

# Route to clear the cart
@app.route('/clear-cart', methods=['POST'])
def clear_cart():
    # Clear the cart in the session
    session.pop('cart', None)
    return 'Cart cleared successfully'

# Route to create a checkout session
@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        # Create line items based on items in the cart
        line_items = []
        for item in session.get('cart', []):
            line_items.append({
                'price': item['price_id'],
                'quantity': item['quantity'],
            })

        checkout_session = stripe.checkout.Session.create(
            line_items=line_items,
            invoice_creation={"enabled": True},
            mode='payment',
            success_url=YOUR_DOMAIN + '/success-payment',
            cancel_url=YOUR_DOMAIN + '/shop',
            shipping_address_collection={
            'allowed_countries': ['US', 'CA'],  # Specify the allowed countries for shipping
            },
            phone_number_collection={"enabled": True},
            shipping_options=[
        {
        "shipping_rate_data": {
            "type": "fixed_amount",
            "fixed_amount": {"amount": 850, "currency": "eur"},
            "display_name": "France Shipping",
            "delivery_estimate": {
            "minimum": {"unit": "business_day", "value": 1},
            "maximum": {"unit": "business_day", "value": 4},
            },
        },
        },
        {
        "shipping_rate_data": {
            "type": "fixed_amount",
            "fixed_amount": {"amount": 1425, "currency": "eur"},
            "display_name": "EU Shipping",
            "delivery_estimate": {
            "minimum": {"unit": "business_day", "value": 1},
            "maximum": {"unit": "business_day", "value": 5},
                    },
                    },
                },
                ],
        )
    except Exception as e:
        return str(e)

    return redirect(checkout_session.url, code=303)
@app.route('/delete-from-cart', methods=['POST'])
def delete_from_cart():
    try:
        # Get product information from the request
        product_id = request.json['product_id']

        # Retrieve the current cart from the session or create an empty cart
        cart = session.get('cart', [])

        # Remove the item with the specified product_id from the cart
        cart = [item for item in cart if item['product_id'] != product_id]

        # Update the cart in the session
        session['cart'] = cart

        return 'Item deleted from cart successfully'

    except Exception as e:
        return str(e)

if __name__ == '__main__':
    app.run(port=4242)

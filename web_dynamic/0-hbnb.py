#!/usr/bin/python3
"""Flask app to generate complete html page containing location/amenity
dropdown menus and rental listings"""
from flask import Flask, render_template
from models import storage
import uuid

app = Flask('web_dynamic')
app.url_map.strict_slashes = False


@app.route('/0-hbnb')
def display_hbnb():
    """Generate page with popdown menu of states/cities"""
    cache_id = str(uuid.uuid4())
    states = storage.all('State')
    amenities = storage.all('Amenity')
    places = storage.all('Place')
    return render_template('0-hbnb.html',
                           cache_id=cache_id,
                           states=states,
                           amenities=amenities,
                           places=places)


@app.teardown_appcontext
def teardown_db(*args, **kwargs):
    """Close database or file storage"""
    storage.close()


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

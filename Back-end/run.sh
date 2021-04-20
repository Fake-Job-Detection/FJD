#!/bin/bash

export FLASK_APP=api:create_app
export FLASK_ENV=development
flask run

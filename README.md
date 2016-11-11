# wattools
Wattools+

## Flask development

### Initial setup (should only do once)
1. Install Postgres on your local
2. `touch .env` with
```
source venv/bin/activate
export WATTOOLS_ENV="development"
export DATABASE_URL="postgresql://localhost/wattools_development"
```

3. Make sure you have Python 2.7 and virtualenv installed on your local machine
4. `virtualenv venv`
5. `createdb wattools_development`
6. `python manage.py create_db`

### Normal development

1. `source venv/bin/activate`
2. `pip install -r requirements.txt`
3. `python manage.py shell` if you want an interactive shell to test

### Migration
1. `python manage.py db migrate` to create migration file
2. `python manage.py db upgrade` to update the db using the migration

## Frontend development
9. `cd` into the `client` folder
1. run `npm install` to install the dependencies
2. run `npm start` to start a dumb server to serve the frontend to `localhost:8080`


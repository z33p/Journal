# Journal

> Full stack Django/React (still in development)

### Python config
```console
# Init virtual environment
z33p@debian:~/Development/Django-Projects/testing/Journal$ pipenv shell
Launching subshell in virtual environment…
 . /home/z33p/.local/share/virtualenvs/Journal-dPiKoBv4/bin/activate
z33p@debian:~/Development/Django-Projects/testing/Journal$  . /home/z33p/.local/share/virtualenvs/Journal-dPiKoBv4/bin/activate

# Install dependencies
(Journal) z33p@debian:~/Development/Django-Projects/testing/Journal$ pipenv install
Installing dependencies from Pipfile.lock (cb4d6a)…
  🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 11/11 —


# Migrate
(Journal) z33p@debian:~/Development/Django-Projects/testing/Journal$ ./manage.py migrate
Operations to perform:
  Apply all migrations: RestAPI, admin, auth, contenttypes, knox, sessions
Running migrations:
  Applying contenttypes.0001_initial... OK
  Applying auth.0001_initial... OK
  Applying RestAPI.0001_initial... OK
  Applying admin.0001_initial... OK

  --snippet--

  Applying admin.0002_logentry_remove_auto_add... OK
  Applying admin.0003_logentry_add_action_flag_choices... OK
  Applying sessions.0001_initial... OK

# Serve API on localhost:8000
(Journal) z33p@debian:~/Development/Django-Projects/testing/Journal$ ./manage.py runserver
```

### React config
```bash
# Install dependencies
z33p@debian:~/Development/Django-Projects/testing/Journal$ npm install

# Build for production
z33p@debian:~/Development/Django-Projects/testing/Journal$ npm run build
```

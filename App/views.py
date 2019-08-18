from django.shortcuts import render

# Create your views here.
def index(request, subject, *args, **kwargs):
    template_name = 'App/index.html'
    context = {
        "subject": subject,
    }

    return render(request, template_name, context)

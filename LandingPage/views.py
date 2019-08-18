from django.shortcuts import render

# Create your views here.
def index(request, *args, **kwargs):
    template_name = "LandingPage/index.html"
    # context = {}
    
    return render(request, template_name)
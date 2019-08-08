from django.shortcuts import render

# Create your views here.
def sreView(request, *args, **kwargs):
    template_name = "simpleReactEngine/simpleReactEngine.html"
    context = {}
    
    return render(request, template_name, context)

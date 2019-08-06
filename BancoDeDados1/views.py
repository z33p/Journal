from django.shortcuts import render

# Create your views here.
def BancoDeDados1(request, *args, **kwargs):
    template_name = "BancoDeDados1/BancoDeDados1.html"
    context = {}
    return render(request, template_name, context)

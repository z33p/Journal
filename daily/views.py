from django.shortcuts import render

# Create your views here.
def daily(request, *args, **kwargs):
    template_name = "daily/daily.html"
    context = {}
    return render(request, template_name, context)

from django.shortcuts import render

# Create your views here.
import json
from django.shortcuts import render
from django.conf import settings
import os

def display_json(request):
    json_path = os.path.join(settings.STATIC_ROOT or settings.STATICFILES_DIRS[0], 'json/output.json')
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return render(request, 'basaer/index.html', {'data': data})

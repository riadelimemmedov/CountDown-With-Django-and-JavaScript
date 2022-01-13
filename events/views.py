from django.shortcuts import render
from django.views.generic import ListView,DetailView
from .models import *


# Create your views here.
class EventListView(ListView):
    model = Event
    template_name = 'events/main.html'
    context_object_name = 'events'
    
class EventDetailView(DetailView):
    model = Event
    template_name = 'events/countdown.html'
    context_object_name = 'eventdetail'
    
    
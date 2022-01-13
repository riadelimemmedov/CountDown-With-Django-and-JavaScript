from django.urls import path
from .views import *

app_name = 'eventurl'

urlpatterns = [
    path('',EventListView.as_view(),name='event-list'),
    path('<pk>/',EventDetailView.as_view(),name='event-detail'),
]


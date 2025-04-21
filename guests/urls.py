from django.urls import path
from .views import GuestViewSet


urlpatterns = [
    path('', GuestViewSet.as_view())
]
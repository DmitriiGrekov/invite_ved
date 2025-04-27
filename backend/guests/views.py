import json
from .models import GuestModel
from .serializers import GuestSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


class GuestViewSet(APIView):

    def get(self, request, format=None):
        guests = GuestModel.objects.all()
        return Response(GuestSerializer(guests, many=True).data)
    
    def post(self, request):
        data = json.loads(request.body).get('users')
        serializer = GuestSerializer(data=data, many=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(data)

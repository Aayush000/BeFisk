from django.shortcuts import render

from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

# Create your views here.

@api_view(["GET"])
def test(request):
	text = request.query_params.get('text')
	data = {'result': text}
	return Response(data)
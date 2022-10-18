from teacher.serializers import (
    TeacherSerializer, RegisterClassSerializer, ClassSerializer
)
from rest_framework.views import APIView, Response
from rest_framework.status import (
    HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_201_CREATED,
)
from teacher.models import Teacher, Class
from django.shortcuts import get_object_or_404


class TeacherAPIView(APIView):
    def get(self, request, format=None):
        teachers = Teacher.objects.all()
        serializer = TeacherSerializer(teachers, many=True)
        return Response(serializer.data, status=HTTP_200_OK)


class RegisterClassAPIView(APIView):
    def post(self, request, id, format=None):
        teacher = get_object_or_404(Teacher, id=id)
        serializer = RegisterClassSerializer(data=request.data)
        if serializer.is_valid():
            teacher_class = Class(
                name=serializer.validates_data.get('name'),
                email=serializer.validates_data.get('email'),
                teacher=teacher,
            )
            teacher_class.save()
            class_serializer = ClassSerializer(teacher_class, many=False)
            return Response(class_serializer.data, status=HTTP_201_CREATED)
        return Response(
            {
                "message": "There are validation errors",
                "errors": serializer.errors
            },
            status=HTTP_400_BAD_REQUEST
        )




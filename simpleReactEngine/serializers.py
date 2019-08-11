from rest_framework import serializers
from django.contrib.auth.models import User
from . import models


# Journal Serializer
class htmlSnnipetSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.htmlSnnipet
        fields = '__all__'


class ArticleSerializer(serializers.ModelSerializer):
    htmlsnnipet_set = htmlSnnipetSerializer(many=True, read_only=True)

    class Meta:
        model = models.Article
        fields = '__all__'


class SubjectSerializer(serializers.ModelSerializer):
    article_set = ArticleSerializer(many=True, read_only=True)
    owner = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    def validate_title(self, title):
        request = self.context['request']

        if models.Subject.objects.filter(owner=request.user.pk, title=title):
            raise serializers.ValidationError("Erro: O Subject já existe para este usuário.")
        return title

    class Meta:
        model = models.Subject
        fields = '__all__'


# User Serializer
class UserSerializer(serializers.ModelSerializer):
    # Retorna a pk do atributo "subject_set" de alguma instância de Subject 
    subject_set = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    # Correlaciona a pk de "subject_set" com a "StringRelatedField"
    subject_name = serializers.StringRelatedField(source="subject_set", many=True, read_only=True)

    class Meta:
        model = User
        fields = '__all__'

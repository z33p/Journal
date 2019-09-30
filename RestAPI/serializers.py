from rest_framework import serializers
from django.contrib.auth.models import User
from . import models


class SnnipetSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Snnipet
        fields = '__all__'


class ArticleSerializer(serializers.ModelSerializer):
    snnipet_set = SnnipetSerializer(many=True, read_only=True)

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
            raise serializers.ValidationError(
                "Erro: O Subject já existe para este usuário.")
        return title

    class Meta:
        model = models.Subject
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    subject_set = SubjectSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ('subject_set',)
        # fields = '__all__'

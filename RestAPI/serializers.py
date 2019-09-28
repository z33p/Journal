from rest_framework import serializers
from . import models


# Journal Serializer
class SnnipetSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Snnipet
        fields = '__all__'


class ArticleSerializer(serializers.ModelSerializer):
    snnipet_set = SnnipetSerializer(many=True, read_only=True)

    # Correlaciona a pk de "snnipet_set" com a "StringRelatedField"
    snnipet_name = serializers.StringRelatedField(
        source="snnipet_set", many=True, read_only=True)

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

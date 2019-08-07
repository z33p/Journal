from django.shortcuts import render
from . import models
import json
import os


# Create your views here.
def listJournalView(request, subject_name,*args, **kwargs):
    template_name = 'webTemplate/index.json'
    subject = models.Subject.objects.filter(title=subject_name)[0]
    journal = (subject.title, [])
    # print("Subject: ", subject)
    section_count = -1

    for section in models.Section.objects.filter(subject=subject.id):
        journal[1].append(({
            "title": section.title, "description": section.description
            }, []))
        # print("\tSection: ", section)
        section_count += 1
        article_count = -1
        for article in models.Article.objects.filter(section=section.id):
            journal[1][section_count][1].append((
            {"title": article.title, "description": article.description}
            , []))
            # print("\t\tArticle: ", article)
            article_count += 1
            for paragraph in models.Paragraph.objects.filter(article=article.id):
                journal[1][section_count][1][article_count][1].append(paragraph.content)
                # print("\t\t\tParagraph: ", paragraph)

    journal = json.dumps(journal)
    with open(os.path.dirname(os.path.realpath(__file__)) + "/templates/webTemplate/index.json", "w") as f:
        f.write(journal)

    return render(request, template_name)

# def listJournal(request, subject_name,*args, **kwargs):
#     template_name = 'webTemplate/index.html'
#     context = {}
#
#     return render(request, template_name, context)

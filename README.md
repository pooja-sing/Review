###dependencies
    @fortawesome/free-solid-svg-icons
    @fortawesome/react-fontawesome"
### Description of properties in the review object
Example:
{
"reviewer_name": "Barbara",
"content": "We had a relaxing time ❤.\n\n[Positive]: The spa was excellent. We had a wonderful
relaxing time! [Negative]: The food choices at the Rowe restaurant. Parking should be included in your
stay because you pay a lot to stay here already.",
"raw_content": "We had a relaxing time ❤.\n\n[Positive]: The spa was excellent. We had a wonderful
relaxing time! [Negative]: The food choices at the Rowe restaurant. Parking should be included in your
stay because you pay a lot to stay here already.",
"date": "05 Dec 2023",
"rating_review_score": 10.0,
"out_of": 10.0,
"source_language": "en",
"source": {
"name": "booking.com",
"icon": "https://reviewmagic.innspire.com:8001/media/sources/booking3.png",
},
"analytics": [
{
"category": "spa",
"topic": "spa",
"phrases": ["spa", "spa"],
"sentences": ["The spa was excellent"],
"sentiment": "Positive",
"highlight_indices": [
[40, 61, "Positive"]
]
},
{
"category": "facilities",
"topic": "facilities",
"phrases": ["parking", "parking"],
"sentences": ["Parking should be included in your stay because you pay a lot to stay here already"],
"sentiment": "Negative",
"highlight_indices":
[ [155, 237, "Negative"]
]
}
],
}
Description:
● reviewer_name: Name of the reviewer.
● content: The main text content of the review.
● raw_content: Unmodified original content of the review.
● date: Date when the review was posted.
● rating_review_score: Numeric rating given by the reviewer.
● out_of: Maximum rating possible (e.g., 10.0).
● source: Information about the source of the review.
○ name: Name of the source (eg: booking.com).
○ icon: Icon of the source.
● source_language: Language in which the review is written.
● analytics: Array containing sentiment analytics for specific categories.
○ category: Category associated with the analytics.
○ topic: Topic associated with analytics.
○ phrases: Phrases related to analytics.
○ sentences: Extracted sentences related to the analytics.
○ sentiment: Sentiment of the analytics.
○ highlight_indices: Array containing start and end indices for highlighted
sentences.

Color code for each sentiment:
● Positive: #D9F2DD
● Negative: #F2DBD9
● Mixed: #e8bd6d3d
● Neutral: #eaf09b6b

![alt text](<Screenshot 2024-06-12 191627.png>)
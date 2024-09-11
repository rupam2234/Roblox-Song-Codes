interface SchemaData {
  Headline: string;
  AuthorName: string;
  PageUrl: string;
  PageName: string;
  PageAbout: string;
}

const TableSchemaHandler: React.FC<SchemaData> = ({
  Headline,
  AuthorName,
  PageUrl,
  PageName,
  PageAbout,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: `${Headline}`, //Monstercat Roblox Songs
    author: {
      "@type": "Person",
      name: `${AuthorName}`,
    },
    mainEntity: {
      "@type": "Table",
      "@id": `${PageUrl}`,
      caption: `${PageName}`,
      about: `${PageAbout}`,
      tableSchema: {
        "@type": "TableSchema",
        columns: [
          {
            "@type": "PropertyValue",
            name: "Song Name",
            description: "The name of the song",
          },
          {
            "@type": "PropertyValue",
            name: "Song ID",
            description: "The Roblox Song ID",
          },
          {
            "@type": "PropertyValue",
            name: "Ratings",
            description: "User ratings for the track",
          },
          {
            "@type": "PropertyValue",
            name: "Duration",
            description: "Length of the track",
          },
        ],
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
};

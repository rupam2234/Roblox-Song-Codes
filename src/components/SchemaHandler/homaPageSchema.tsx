import { SchemaData } from "./schema";

const HomapageSchema: React.FC<SchemaData> = ({
  Headline,
  PageUrl,
  PageAbout,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: `${Headline}`,
    description: `${PageAbout}`,
    publisher: {
      "@type": "Organization",
      name: "RobloxSongCodes.com",
    },
    mainEntity: {
      "@type": "Table",
      "@id": `${PageUrl}`,
      "Table:tableSchema": {
        columns: [
          {
            "columns.name": "Track Name",
            "columns.datatype": "string",
            "columns.cells": [
              {
                "columns:value": "Immortal",
                "columns:primaryKey": "Immortal",
              },
              {
                "columns:value": "The Will To Fight A",
                "columns:primaryKey": "The Will To Fight A",
              },
              {
                "columns:value": "Rage",
                "columns:primaryKey": "Rage",
              },
              {
                "columns:value": "Victory Is Ours",
                "columns:primaryKey": "TVictory Is Ours",
              },
            ],
          },
          {
            "columns:name": "Song IDs",
            "columns:datatype": "string",
            "columns:cells": [
              {
                "columns:value": "1837010107",
                "columns:primaryKey": "1837010107",
              },
              {
                "columns:value": "1845793864",
                "columns:primaryKey": "1845793864",
              },
              {
                "columns:value": "1836552129",
                "columns:primaryKey": "1836552129",
              },
              {
                "columns:value": "1842802498",
                "columns:primaryKey": "1842802498",
              },
            ],
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

export default HomapageSchema;

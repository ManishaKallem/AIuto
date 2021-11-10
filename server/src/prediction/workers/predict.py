import json
import tempfile

import click
from google.cloud import automl_v1beta1 as automl

PROJECT_ID = "winter-citizen-326711"
COMPUTE_REGION = "us-central1"
MODEL_DISPLAY_NAME = "AIuto_20210924123034"


@click.argument("file_path")
@click.command()
def main(file_path):
    with open(file_path) as fp:
        inputs = json.load(fp)
    predict(inputs)


def predict(inputs):

    client = automl.TablesClient(project=PROJECT_ID, region=COMPUTE_REGION)

    feature_importance = False

    response = client.predict(
        model_display_name=MODEL_DISPLAY_NAME,
        inputs=inputs,
        feature_importance=feature_importance,
    )

    to_write = []
    for res in response.payload:
        to_write.append({"name": res.tables.value, "value": res.tables.score})
        # print("\n\nPredicted class name: {}".format(result.tables.value))
        # print("Predicted class score: {}".format(result.tables.score))

        # if feature_importance:
        #     # get features of top importance
        #     feat_list = [
        #         (column.feature_importance, column.column_display_name)
        #         for column in result.tables.tables_model_column_info
        #     ]
        #     feat_list.sort(reverse=True)

        #     print("Features of top importance:")
        #     for index, feat in enumerate(feat_list):
        #         if index == 10:
        #             break
        #         print(feat)

    fd, path = tempfile.mkstemp(prefix="output-", suffix=".json")

    with open(fd, "w") as tmp:
        json.dump(to_write, tmp)

    print(path, end="")


if __name__ == "__main__":
    main()

import {ApiModel} from '@microsoft/api-extractor-model';

// eslint-disable-next-line import/extensions
import {MarkdownDocumenter} from './custom_markdown_documenter';

export const generateDocs = (jsonPath: string, outputDir: string): void => {
  const apiModel = new ApiModel();
  apiModel.loadPackage(jsonPath);

  const markdownDocumenter: MarkdownDocumenter = new MarkdownDocumenter({
    apiModel: apiModel,
    documenterConfig: undefined,
    outputFolder: outputDir,
  });
  markdownDocumenter.generateFiles();
};
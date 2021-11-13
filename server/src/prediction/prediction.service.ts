import { Injectable, Logger } from '@nestjs/common';
import { spawnSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';
import tmp from 'tmp';
import { COLUMNS, PredictionDto } from './dto/prediction.dto';

const PYTHON_WORKER_FILE = resolve(join(__dirname, 'workers', 'predict.py'));

@Injectable()
export class PredictionService {
  private readonly logger = new Logger(PredictionService.name);

  async mentalHealthPredict(inputs: [PredictionDto]) {
    const errors = [];
    inputs.map((input) => {
      const index = COLUMNS.findIndex((e) => e.id === input.id);
      if (index === -1)
        errors.push(`Input id='${input.id}' is not present in the schema`);
    });
    if (errors.length) return Promise.reject(errors);
    const inputData = {};
    inputs.map((input) => {
      const column = COLUMNS.find((e) => e.id === input.id);
      inputData[column.name] = input.value;
    });
    const filePath = tmp.tmpNameSync({ template: 'input-XXXXXX.json' });
    writeFileSync(filePath, JSON.stringify(inputData), 'utf-8');
    this.logger.debug(`Wrote file to '${filePath}'`);
    const pythonProcess = spawnSync('python3', [PYTHON_WORKER_FILE, filePath]);
    if (pythonProcess.status === 0) {
      const outputFile = pythonProcess.stdout.toString().trim();
      this.logger.debug(`Read output from '${outputFile}'`);
      const output = readFileSync(outputFile);
      return JSON.parse(output.toString());
    } else {
      const output = pythonProcess.stderr.toString();
      this.logger.error(output);
    }
    return Promise.reject({
      message: 'There was an error with processing the input',
    });
  }

  mentalHealthColumns() {
    return COLUMNS;
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { unlinkSync } from 'fs';
import { glob } from 'glob';
import { PrismaService } from 'src/prisma.service';
import tmp from 'tmp';

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);

  constructor(private readonly prisma: PrismaService) {}

  /* PREDICTION */

  @Cron(CronExpression.EVERY_3_HOURS)
  async deletePredictionTemporaryFiles() {
    this.logger.log('Deleting temporary files');
    glob(`${tmp.tmpdir}/*.json`, (_err, files) => {
      files.forEach((file) => {
        unlinkSync(file);
        this.logger.debug(`Deleted '${file}'`);
      });
    });
  }
}

import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PredictionDto } from './dto/prediction.dto';
import { PredictionService } from './prediction.service';

@Controller('prediction')
@ApiTags('prediction')
export class PredictionController {
  constructor(private readonly predictionService: PredictionService) {}

  @Post('/mental-health/predict')
  async mentalHealthPredict(@Body() inputs: [PredictionDto]) {
    try {
      const result = await this.predictionService.mentalHealthPredict(inputs);
      return result;
    } catch ($e) {
      console.error($e);
      throw new BadRequestException($e);
    }
  }

  @Get('/mental-health/columns')
  mentalHealthColumns() {
    return this.predictionService.mentalHealthColumns();
  }
}

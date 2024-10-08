import { ConfigModule } from 'src/config/config.module';
import { EpisodesController } from './episodes.controller';
import { Module } from '@nestjs/common';
import { EpisodesService } from './episodes.service';


@Module({
    imports :[ ConfigModule ],
    controllers: [EpisodesController],
    providers: [EpisodesService]
})
export class EpisodesModule {

}

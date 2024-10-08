import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { Episode } from './entity/episodes.entity';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/episodes.dto';
import { ConfigService } from '../config/config.service';




@Controller('episodes')
export class EpisodesController {
    constructor ( 
        private episodesService : EpisodesService,
        private configService : ConfigService
     ){}
    @Get()
    findAll( 
        @Query('sort') sort: 'asc' | 'desc' = 'desc' ,
        @Query('limit' , new DefaultValuePipe(100) , ParseIntPipe ) limit: number
    ){  
        console.log(sort);
        return this.episodesService.findAll(sort);
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        console.log(id);
        return this.episodesService.findOne(id);
        // return `This action returns a #${id} episode`;
    }

    @Get('featured')
    findFeatured(){
        return this.episodesService.findFeatured();
        // return 'featured episodes';        
    }

    @Post()
    createEpisode(@Body() input: CreateEpisodeDto){
        return this.episodesService.createEpisode(input);
        // return `This action adds a new episode : \n ${Body} `;
    }
}

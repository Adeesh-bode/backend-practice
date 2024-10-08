import { Injectable } from '@nestjs/common';
import { Episode } from './entity/episodes.entity';

@Injectable()
export class EpisodesService {

    private episodes:Episode[] = []; // use db here

    async findAll(sort: 'asc' | 'desc' = 'desc'): Promise<Episode[]> {

        const sortAsc = this.episodes.sort((a,b) => a.title.localeCompare(b.title));
        const sortDesc = this.episodes.sort((a,b) => b.title.localeCompare(a.title));
        return sort === 'asc' ? sortAsc : sortDesc;
    }

    async findOne(id: string): Promise<Episode> {
        return this.episodes.find(episode => episode.title === id);
    }

    async findFeatured(): Promise<Episode[]> {
        return this.episodes.filter(episode => episode.title === 'featured');
    }

    async createEpisode(episode: Episode): Promise<Episode> {
        this.episodes.push(episode);
        return episode;
    }

}

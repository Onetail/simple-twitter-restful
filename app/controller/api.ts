import { Controller } from 'egg';
import { TagsAll, Prefix, Get } from 'egg-shell-decorators';
import { readFileSync } from 'fs';

@TagsAll('api-docs')
@Prefix('api-docs')
export default class ApiController extends Controller {
  @Get('/public/json/main.json')
  public async apiDocs() {
    let data = await readFileSync('api-docs/public/json/main.json', 'utf8');
    data = JSON.parse(data);
    this.ctx.body = data;
  }
}

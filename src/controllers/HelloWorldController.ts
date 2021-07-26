import {Controller, Get, PathParams} from "@tsed/common";

@Controller("/api/1.0/test")
export class HelloWorldController {
  @Get("/")
  get() {
    return "hello";
  }

  @Get("/:id")
  getById(@PathParams(':id') id: string) {
    return `hello: ${id}`;
  }
}

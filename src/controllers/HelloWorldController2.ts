import {Controller, Get, PathParams} from "@tsed/common";

@Controller("/api/2.0/test")
export class HelloWorldController2 {
  @Get("/")
  get() {
    return "hello";
  }

  @Get("/:id")
  getById(@PathParams(':id') id: string) {
    return `hello: ${id}`;
  }
}

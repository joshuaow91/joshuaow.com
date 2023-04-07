import React from "react";
import { Timeline, Button } from "flowbite-react";
import { HiArrowNarrowRight } from 'react-icons/hi';

const TimelineComp = () => {

    return (
        <Timeline className="text-black dark:text-white flex flex-col">
  <Timeline.Item className="">
    <Timeline.Point className="" />
    <Timeline.Content>
      <Timeline.Time>
        Project Name
      </Timeline.Time>
      <Timeline.Title>
        Teach STack with icons?
      </Timeline.Title>
      <Timeline.Body>
        Descriptions - photo relative to right
      </Timeline.Body>
      <Button className=" my-4 text-neutral-50 bg-gradient-to-r from-cyan-400 via-cyan-400 to-cyan-300 font-montserrat text-xs rounded hover:scale-105 ease-in-out duration-300">
        Learn More
        <HiArrowNarrowRight className="ml-2 h-3 w-3" />
      </Button>
    </Timeline.Content>
  </Timeline.Item>
  <Timeline.Item className="">
    <Timeline.Point className="" />
    <Timeline.Content>
      <Timeline.Time>
        Project Name
      </Timeline.Time>
      <Timeline.Title>
        Teach STack with icons?
      </Timeline.Title>
      <Timeline.Body>
        Descriptions - photo relative to right
      </Timeline.Body>
      <Button className=" my-4 text-neutral-50 bg-gradient-to-r from-pink-500 via-pink-500 to-pink-600 font-montserrat text-xs rounded hover:scale-105 ease-in-out duration-300">
        Learn More
        <HiArrowNarrowRight className="ml-2 h-3 w-3" />
      </Button>
    </Timeline.Content>
  </Timeline.Item>
  <Timeline.Item className="">
    <Timeline.Point className="" />
    <Timeline.Content>
      <Timeline.Time>
        Project Name
      </Timeline.Time>
      <Timeline.Title>
        Teach STack with icons?
      </Timeline.Title>
      <Timeline.Body>
        Descriptions - photo relative to right
      </Timeline.Body>
      <Button className=" my-4 text-neutral-50 bg-gradient-to-r from-pink-500 via-pink-500 to-pink-600 font-montserrat text-xs rounded hover:scale-105 ease-in-out duration-300">
        Learn More
        <HiArrowNarrowRight className="ml-2 h-3 w-3" />
      </Button>
    </Timeline.Content>
  </Timeline.Item>
</Timeline>
    )
}

export default TimelineComp;
import React from "react";
import Room from "./Room";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { RoomConsumer, RoomContext } from "../context";
import Loading from "./Loading";

export default function RoomContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
          </>
        );
      }}
    </RoomConsumer>
  );
}

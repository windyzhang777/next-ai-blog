import React, { FC, useCallback, useEffect, useMemo, useState } from "react";

type SidebarProps = {
  className: string;
};

const Sidebar = ({ className }: SidebarProps) => {
  return <section className={`${className}`}>Sidebar</section>;
};

export default Sidebar;

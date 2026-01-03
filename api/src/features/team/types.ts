export type TeamId = string;

export type Team = {
  readonly createdAt: Date;
  readonly id: TeamId;
  readonly name: string;
  readonly updatedAt: Date;
};

export type TeamResponseDto = {
  readonly createdAt: string;
  readonly id: string;
  readonly name: string;
  readonly updatedAt: string;
};

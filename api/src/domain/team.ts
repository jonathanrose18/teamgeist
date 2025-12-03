export type TeamId = string;

export type Team = {
  readonly createdAt: Date;
  readonly id: TeamId;
  readonly name: string;
  readonly updatedAt: Date;
};
